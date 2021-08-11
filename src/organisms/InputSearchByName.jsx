export const InputSearchByName = () => {
    return(
        <form>
            <label>
                <input 
                type="text" 
                name="name"
                placeholder="Country name" 
                />
            </label>
        <input type="submit" value="Search" />
        </form>
    )
}
