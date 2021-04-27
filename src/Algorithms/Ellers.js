

// algo
/* 

// for loop to set all elements in row to own set
for(i = 0; < lenght of row, ++){
    // get the whole entire row, and create a set for each element
    forEach cell in row, set(cell) -> setARR
    for(each set in setArr){
        gen random 0 or 1, 
        if 1, join next cell into curr set
        if(col == row.length -1 ), you cant join set, only do vertical connection
    }

    for each set again determine vertical connections
        have to have one vertical connection atleast
        so right away, connect grid[i][j] and grid[i+1][j], add new cell into set
        while( some blank is false or counter < number of cells in set){
            create some more random connections
        }
}
*/