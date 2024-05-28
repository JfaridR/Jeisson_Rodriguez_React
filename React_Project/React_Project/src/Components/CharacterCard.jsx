
const CharacterCard = (props) => {
    const {title, image, genre, status} = props
    return (
        <>
            <div className='cardContainer2'>
                <img className='rickImg' src={image} />
                <h2 className='nameTitle'>{title}</h2>
                <p className='details'>{genre}</p>
                <p className='details'>{status}</p>
            </div>
        </>
    )
}

export default CharacterCard