import './carouselItem.css'
const CarouselItem = ({ title, content, image }) => {
    return (
        <>
            <div className="carousel-item">
                <h2 className="carousel-title">{title}</h2>
                <p className="carousel-content">{content}</p>
                <img src={image} alt={title} className="carousel-image" />
            </div>
        </>
    )
}

export default CarouselItem