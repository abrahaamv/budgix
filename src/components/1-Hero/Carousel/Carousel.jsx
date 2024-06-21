import CarouselItem from "./CarouselItem"
import image1 from '../../assets/images/image.jpg';
import image2 from '../../assets/images/image.jpg';
import image3 from '../../assets/images/image.jpg';
import './carousel.css'

const Carousel = () => {
    const carouselItems = [
        {
            title: 'Item 1',
            content: 'Contenido del Item 1',
            image: image1
        },
        {
            title: 'Item 2',
            content: 'Contenido del Item 2',
            image: image2
        },
        {
            title: 'Item 3',
            content: 'Contenido del Item 3',
            image: image3
        }
    ]
    return (
        <>
            <div className="carousel-container">
                <div className="carousel-animation">
                    <h1>The fast way to migrate your system</h1>
                    <img src={image3} alt="animation" />
                </div>
                <div className="carousel-grid">
                    {carouselItems.map((item, index) => (
                        <CarouselItem
                            key={index}
                            title={item.content}
                            content={item.content}
                            image={item.image} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Carousel