import EventEmitter from 'node:events';
import { credentials, Metadata } from '@grpc/grpc-js';
import { GrpcTransport } from '@protobuf-ts/grpc-transport';

// Substream generated code
// $ buf generate buf.build/fubhy/substreams
import { StreamClient } from './src/generated/sf/substreams/v1/substreams.client';
import { Package } from './src/generated/sf/substreams/v1/package';
import { Modules } from './src/generated/sf/substreams/v1/modules';
import { BlockScopedData, ForkStep, Request } from './src/generated/sf/substreams/v1/substreams';

// Export utils & Typescript interfaces
export * from "./src/generated/sf/substreams/v1/clock"
export * from "./src/generated/sf/substreams/v1/modules"
export * from "./src/generated/sf/substreams/v1/package"
export * from "./src/generated/sf/substreams/v1/substreams"
export * from "./src/utils";

// Utils
import { downloadPackage, downloadProto, parseBlockData } from './src/utils';

// Create Substream
export function createStream(client: StreamClient, modules?: Modules, options: {
    startBlockNum?: string,
    stopBlockNum?: string,
    outputModules?: string[],
} = {}) {
    const { startBlockNum, stopBlockNum, outputModules } = options;
    return client.blocks(Request.create({
        startBlockNum,
        stopBlockNum,
        forkSteps: [ForkStep.STEP_IRREVERSIBLE],
        modules,
        outputModules,
    }));
}

async function downloadSubstream( ipfs: string ) {
    const binary = await downloadPackage(ipfs);
    const { modules } = Package.fromBinary(binary);
    if ( !modules ) throw new Error(`No modules found in Substream: ${ipfs}`);
    return modules;
}

export default class Substreams extends EventEmitter {
    // internal
    public client: StreamClient;

    // configs
    public startBlockNum?: string;
    public stopBlockNum?: string;
    public outputModules?: string[];

    constructor(host: string, options: {
        startBlockNum?: string,
        stopBlockNum?: string,
        outputModules?: string[],
        authorization?: string,
    } = {}) {
        super();
        this.startBlockNum = options.startBlockNum;
        this.stopBlockNum = options.stopBlockNum;

        // Credentials
        const metadata = new Metadata();
        if ( options.authorization ) metadata.add('authorization', options.authorization);
        const creds = credentials.combineChannelCredentials(
            credentials.createSsl(),
            credentials.createFromMetadataGenerator((_, callback) => callback(null, metadata)),
        );
        
        // Substream Client
        this.client = new StreamClient(
            new GrpcTransport({
                host,
                channelCredentials: creds,
            }),
        );
    }

    static async downloadSubstream( ipfs: string ) {
        return downloadSubstream(ipfs);
    }

    static async downloadProto( ipfs: string ) {
        return downloadProto(ipfs);
    }

    public async start(modules: Modules) {    
        // Setup Substream
        const stream = createStream(this.client, modules, {
            startBlockNum: this.startBlockNum,
            stopBlockNum: this.stopBlockNum,
            outputModules: this.outputModules,
        });
    
        // Send Substream Data to Adapter
        for await (const response of stream.responses) {
            const block = parseBlockData(response);
            if ( !block ) continue;
            this.emit("block", block);
    
            for ( const output of block.outputs ) {
                console.log(output);
                if ( output.data.oneofKind == "mapOutput" ) {
                    const { value } = output.data.mapOutput;
                    if ( !value.length ) continue;
                    this.emit("mapOutput", value );
                }
            }
        }
        this.emit("done");
    }
}
