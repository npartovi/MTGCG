import mtg from "mtgsdk"

export const getCards = (colors) => {

    let colorString = colors.join(",");
    mtg.card.all({ supertypes: 'legendary', types: 'creature', colors: colorString })
        .on('data', function (card) {
            console.log(card)
        });
}