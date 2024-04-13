function Card() {
    return (
        <div className="bg-neutral-300 shadow-md rounded-3xl p-6 transition duration-300 ease-in-out transform hover:bg-stone-50 hover:shadow-black mb-10 max-w-lg mx-auto h-86">
            <div>
                <div className="flex items-center gap-2">
                    <img src="https://via.placeholder.com/50" alt="" /> 
                    <h1 className="text-4xl font-bold">Azanes</h1> 
                </div>
                <p className="text-black text-base mt-12 break-all">
                    O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.
                    1 Coríntios 13:4-7
                </p>
            </div>
            <div className="flex justify-center items-center mt-4">
            <button className="bg-blue-950 hover:bg-white hover:text-black hover:border hover:border-black text-white font-bold py-2 px-20 rounded-tr-3xl rounded-bl-2xl  border-blue-700">Acesse aqui</button>
            </div>
        </div>
    );
}

export default Card;

