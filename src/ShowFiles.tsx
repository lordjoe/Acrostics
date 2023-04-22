import React, { useEffect, useState } from 'react';

const ShowFiles: React.FC = () => {
    const [files, setFiles] = useState<string[] | null>(null);

    useEffect(() => {
        // Fetch the list of files from the 'public/files' subdirectory
        fetch('/file_list.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => {
                setFiles(jsonData.files);
            })
            .catch((error) => {
                console.error('There was a problem fetching the list of files:', error);
            });
    }, []);

    return (
        <div>
            <h1>List of files in the "public/puzzles" subdirectory:</h1>
            {files ? (
                <ul>
                    {files.map((file, index) => (
                        <li key={index}>{file}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ShowFiles;