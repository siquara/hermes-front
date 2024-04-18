import { ArrowRight } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
export function Card({ title, description, image, link}) {
    return (
        <div className=" flex flex-col bg-[#ededed] md:bg-[#f5f5f5] shadow-md rounded-3xl py-12 px-9 xs400:px-12 transition duration-300 ease-in-out transform hover:bg-white mb-10 max-w-lg h-86 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.3)]">
            <div className='mb-4'>
                <div className="flex items-center gap-2">
                    <img src={image} className='min-h-5 max-w-[300px]'/> 
                </div>
                <h1 className="text-3xl font-bold mt-5 text-secondary">{title}</h1> 
                <p className="text-secondary text-base mt-5 hyphens-auto text-justify " >
                    {description}
                </p>
            </div>
            <div className="flex justify-center items-center mt-auto">
                <a href={link} target="_blank" className=" flex gap-4 bg-secondary hover:bg-white hover:cursor-pointer hover:text-secondary hover:border hover:border-secondary text-white font-bold py-2 px-5 xs400:px-10 rounded-tr-3xl rounded-bl-2xl transition-all duration-300 ease-in-out">
                    Acesse aqui
                    <ArrowRight size={24} />
                </a>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};