export const listFiles = async (directory: string): Promise<string[]> => {
    try {
        const fileNames = await (window as any).electron.readDirectory(directory);
        return fileNames;
    } catch (error) {
        console.error('Error reading directory:', error);
        return [];
    }
};

export const readFile = async (filename: string): Promise<string> => {
    try {
        const fileContent = await (window as any).electron.readFile(filename);
        return fileContent;
    } catch (error) {
        console.error('Error reading file:', error);
        return '';
    }
};