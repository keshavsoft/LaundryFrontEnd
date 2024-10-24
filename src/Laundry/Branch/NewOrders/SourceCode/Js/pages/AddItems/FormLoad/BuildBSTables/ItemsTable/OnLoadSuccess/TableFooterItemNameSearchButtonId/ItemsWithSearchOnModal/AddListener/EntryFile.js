let selectedRowIndex = 1;
let StartFunc = () => {
    // let jVarLocalModalId = "ItemsWithSearchOnModal";
    // var table = (document.getElementById(jVarLocalModalId).querySelector("table"));
    // const firstRow = table.getElementsByTagName('tbody tr')[0];
    //   if (firstRow) {
    //     console.log("Veera baabu");
    //     firstRow.classList.add('selected'); 
    //   }  
    const table = document.getElementById('myTable');
    const firstRowByTagName = table.getElementsByTagName('tr')[selectedRowIndex];
    firstRowByTagName.classList.add('table-primary');
    console.log('First row using getElementsByTagName:', firstRowByTagName); 

    document.addEventListener('keydown', function (event) {
        const rows = table.getElementsByTagName('tr');
        switch (event.key) {
            case 'ArrowUp':
                if (selectedRowIndex > 1) {
                    updateSelectedRow(selectedRowIndex - 1);
                }
                break;
            case 'ArrowDown':
                if (selectedRowIndex < rows.length - 1) {
                    updateSelectedRow(selectedRowIndex + 1);
                }
                break;
            case 'Enter':
                if (selectedRowIndex >= 1) {
                    // alert('Selected row: ' + selectedRowIndex);
                    rows[selectedRowIndex].click();
                }
                break;
        }
    });
};

function updateSelectedRow(newIndex) {
    const table = document.getElementById('myTable');
    const rows = table.getElementsByTagName('tr')
    if (selectedRowIndex >= 0 && selectedRowIndex < rows.length) {
        rows[selectedRowIndex].classList.remove('table-primary');
    }
    if (newIndex >= 0 && newIndex < rows.length) {
        rows[newIndex].classList.add('table-primary');
        selectedRowIndex = newIndex;
    }
}

export { StartFunc };