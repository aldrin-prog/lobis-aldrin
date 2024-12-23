const Header = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Book an Event</h1>
                    <p className="mb-5">
                    "Find extraordinary events tailored for you. 
                    Enjoy seamless booking, unique experiences, and unforgettable moments. Your next adventure starts here!"
                    </p>
                    <a href="/events" className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>
    )
}
export default Header