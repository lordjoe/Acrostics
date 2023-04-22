
import React, { useEffect, useState } from 'react';
import {listFiles} from "./FileUtils";



interface FileListProps {
    directory: string;
}

const ShowDirectory: React.FC<FileListProps> = ({ directory }) => {
    const [files, setFiles] = useState<string[]>([]);

    useEffect(() => {
        const fetchFiles = async () => {
            const fileNames = await listFiles(directory);
            setFiles(fileNames);
        };

        fetchFiles();
    }, [directory]);

    return (
        <ul>
            {files.map((file, index) => (
                <li key={index}>
                    <a href={`/?filename=${encodeURIComponent(directory + '/' + file)}`} >{file}</a>
                </li>
            ))}
        </ul>
    );
};

export default ShowDirectory;