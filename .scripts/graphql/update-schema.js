import fs from 'fs';
import path from 'path';
import {graphql, buildSchema}  from 'graphql';
import {introspectionQuery} from 'graphql/utilities';

// TODO: Prettify
const sourcePath = __dirname + '/../../data/schema.graphql';
const outputPath = __dirname + '/../../data/schema.json';

(async () => {
    const source = fs.readFileSync (sourcePath);
    const schema = buildSchema (source.toString ());
    const result = await (graphql (schema, introspectionQuery));

    if (result.errors) {
        console.error (
            'ERROR introspecting schema: ',
            JSON.stringify (result.errors, null, 2)
        );
    } else {
        fs.writeFileSync (
            outputPath,
            JSON.stringify (result, null, 2)
        );
    }
}) ();
