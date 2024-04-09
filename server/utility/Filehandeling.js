const fs = require('fs/promise');

export const upLoadFile = async(localFilePath)=>{
  
    try{
        await fs.writeFile(localFilePath);
        console.log('uploaded Successfully');
    }
    catch(err){
        console.log(err);
    }
}
export const copyFile = async(oldFileWithLocaltion , newfileWithLocation)=>{
    try{
          await fs.copy(oldFileWithlocation , newFileWithLocation);
          console.log('successfully copied');
    }
    catch(err){
        console.log(err);
    }
}
export const downloadFile = (fielKey)=>{
    try{
        // use file key for searching metadat in db 
        const file = await fs.readFile('filepath');
    }
    catch(err){
        console.log(err);
    }
}