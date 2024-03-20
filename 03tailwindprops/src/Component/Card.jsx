

function Card({name,profile,image}) {
    return (
        <div>

            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="" width="384" height="512"></img>
                    <div class="pt-6 md:p-2 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-lg font-medium">
                                Experince professional
                            </p>
                        </blockquote>
                        <figcaption class="font-medium">
                            <div class="text-sky-500 dark:text-sky-400">
                                {name}
                            </div>
                            <div class="text-slate-700 dark:text-slate-500">
                                {profile}
                            </div>
                        </figcaption>
                    </div>
            </figure>

        </div>



    )
}

export default Card