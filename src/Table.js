function Table({chtoto, setChtoto}) {

    const keys = Object.keys(chtoto)
    const handleKeyChange = (event, key) => {
        const newChtoto = {}
        keys.forEach(chKey => {
            if (chKey === key) {
                newChtoto[event.target.value] = chtoto[key];
            } else {
                newChtoto[chKey] = chtoto[chKey]
            }
        })
        setChtoto(newChtoto);
    };

    const handleValChange = (event, key) => {
        const newChtoto = { ...chtoto }
        newChtoto[key] = event.target.value;
        setChtoto(newChtoto);
    };

    return (
        <table>
            <tbody>
            {keys.map((key, i) => {
                return <tr key={i}>
                    <td>
                        <input type='text' value={key} onChange={(event) => handleKeyChange(event, key)}/>
                    </td>
                    <td>
                        <input type='text' value={chtoto[key]} onChange={(event) => handleValChange(event, key)}/>
                    </td>
                </tr>
            })}
            </tbody>
        </table>

    )
}

export default Table;