const { filterDirMyPromise } = require('./filterdir')

async function testerParallel() {
    try {
        const file1 = await filterDirMyPromise("Folder1", ".js")
        const file2 = await filterDirMyPromise("Folder2", ".js")
        const file3 = await filterDirMyPromise("Folder3", ".js")
        const promises = [file1, file2, file3]
        Promise.all(promises).then(res => console.log(res.join(", ")))
    
    } catch (err) {
        console.log(err)
    }
}

async function testerSequence() {
    try {
        const file1 = await filterDirMyPromise("Folder1", ".js")
        const file2 = await filterDirMyPromise("Folder2", ".js")
        const file3 = await filterDirMyPromise("Folder3", ".js")
        console.log([file1, file2, file3].join(", "))
    
    } catch (err) {
        console.log(err)
    }
}

testerSequence()

testerParallel()