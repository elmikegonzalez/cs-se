import React from "react"

export default function CardCollection ({content}) {
    // console.log(content.cards[0].$.content)
    return (

        <section className="max-w-full flex items-center justify-center place-items-center dark:bg-evil">
            <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center my-24 dark:bg-evil dark:text-white">
                <h2 className="text-xl font-bold">{content.header.heading}</h2>
                <p className="mt-4 text-sm text-[#4245242]">{content.header.sub_heading}</p>
            </div>

                {content.cards.map((card, index) => (
                    <div key={`content.cards[index].$.content}`+Math.random()} className="grid grid-cols-3 gap-4 dark:bg-evil">
                        <article
                            className="mx-auto w-[500px] relative flex cursor-pointer rounded-3xl bg-white p-8 shadow-lg transition-all dark:bg-evil dark:text-white">
                            <div>
                                <div id={`card-${index + 1}`} className="relative flex">
                                    <div>
                                        <h2 className="text-xl font-bold">{card.title}</h2>
                                        <h3 className="text-sm">{card.subtitle}</h3>
                                        <p className="mt-6 text-base font-semibold flex flex-row items-center gap-[8px] dark:text-gray">{card.content}</p>
                                    </div>
                                    <img className="h-[300px] w-[350px] rounded-3xl" src={card.image.url}/>
                                    <div className="absolute -bottom-6 flex gap-4">
                                        <button className="bg- h-[48px] w-[132px] rounded-full bg-[#E9786E] text-white">
                                            {card.cta.text}
                                        </button>
                                        <button className="h-12 w-12 rounded-full bg-black"><img
                                            className="mx-auto w-[24px]"
                                            src="https://i.imgur.com/gAfyJnE.png"
                                            alt=""/></button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
        </section>

                    );
                }
