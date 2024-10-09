const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                Transformez votre jardin avec <span className="text-green-600">Hortenia</span>
            </h1>
                <p className="max-w-xl mx-auto pb-14">
                    Rejoignez notre bêta exclusive pour tester notre application en avant première.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-8">
                  <input
                    type="email"
                    placeholder="Entre ton adresse email"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  />
                  <button
                    type="submit"
                    className="text-white bg-green-600 hover:bg-green-800 active:bg-gray-900 px-4 py-2 rounded-md"
                  >
                    Rejoindre la bêta
                  </button>
                </div>
            </div>
        </div>
    </section>
)

export default Hero