

import path from 'path';


export default function createpPath(fileName,extenstion,directory) {
    return path.join(directory,fileName+extenstion)
}


