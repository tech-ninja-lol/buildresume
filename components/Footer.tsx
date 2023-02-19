const Footer = () => {
    return (
        <footer className='w-full py-12 bg-black/80 text-white 
        flex flex-col md:flex-row md:justify-between px-10'>
            <div>Copyright © 2023 ResumeA</div>
            <ul className='flex space-x-6'>
                <li>About us</li>
                <li>Policy</li>
                <li>Contact us</li>
            </ul>
        </footer>
    )
}

export default Footer
