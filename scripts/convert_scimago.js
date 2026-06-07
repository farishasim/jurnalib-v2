// array_push($journals, [
//     $journal[2],
//     $journal[6],
//     $journal[17],
//     $journal[15],
// ]);

import fs from 'fs'; 
import csv from 'csv-parser';

const inputFilePath = './data/scimagojr.csv'

console.log('export const journals = [')

fs.createReadStream(inputFilePath)
.pipe(csv({separator: ';'}))
.on('data', function(data){
    try {
        // console.log("Name is: "+data.NAME);
        // console.log("Age is: "+data.AGE);
        const journal = [data['Title'], data['SJR Best Quartile'], data['Publisher'], data['Country']]
        console.log(
            journal, ','
        )
    }
    catch(err) {
        //error handler
        console.error('Error processing data:', err, 'for journal:', data);
    }
})
.on('end',function(){
    //some final operation
    console.log(']');
});  
