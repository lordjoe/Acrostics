import React, { useEffect, useState } from 'react';
import {FilenameHolder} from "./Holders";

function FileReader(props: FilenameHolder) {
    const [fileContent, setFileContent] = useState<string | null>(null);
    let filename = props.filename;
    useEffect(() => {
        const fetchFileContent = async () => {
            try {
                const response = await fetch(filename);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const text = await response.text();
                setFileContent(text);
            } catch (error) {
                console.error('There was a problem fetching the file content:', error);
            }
        };

        fetchFileContent();
    }, []);

    return (
        <div>
            <h1>Contents of {filename}:</h1>
            {fileContent ? <pre>{fileContent}</pre> : <p>Loading...</p>}
        </div>
    );
};

export default FileReader;