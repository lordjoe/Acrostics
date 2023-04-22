// src/components/FileDisplay.tsx

import React, { useEffect, useState } from 'react';
import { readFile } from './FileUtils';

interface FileDisplayProps {
    filename: string;
}

const FileDisplay: React.FC<FileDisplayProps> = ({ filename }) => {
    const [fileContent, setFileContent] = useState<string>('');

    useEffect(() => {
        const fetchFileContent = async () => {
            const content = await readFile(filename);
            setFileContent(content);
        };

        fetchFileContent();
    }, [filename]);

    return (
        <div>
            <pre>{fileContent}</pre>
        </div>
    );
};

export default FileDisplay;
