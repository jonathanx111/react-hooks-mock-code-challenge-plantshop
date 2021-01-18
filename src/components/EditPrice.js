import { useState } from 'react'
function EditPrice({ price, onUpdatePrice, id }) {
    const [currentPrice, setCurrentPrice] = useState(price)

    function handleEditFormSubmit(e) {
        e.preventDefault()
        onUpdatePrice(currentPrice)
    }

    return (
        <form onSubmit={handleEditFormSubmit}> 
            <input onChange={e => setCurrentPrice(e.target.value)} type="number" placeholder="Change Price" value={currentPrice} />
            <input value="Submit Price" type="submit" />
        </form>
    )
}

export default EditPrice