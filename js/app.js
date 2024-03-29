

const pictures = [
    {
        file: "01.jpg",
        alt: "Hay Bales",
        caption: "I love hay bales.Took this snap on a drive through the countryside past some straw fields."
    },
    {
        file: "02.jpg",
        alt: "Lake",
        caption: "The lake was so calm today.We had a great view of the snow on the mountains from here."
    },
    {
        file: "03.jpg",
        alt: "Canyon",
        caption: "I hiked to the top of the mountain and got this picture of the canyon and trees below."
    },
    {
        file: "04.jpg",
        alt: "Iceberg",
        caption: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today."
    },
    {
        file: "05.jpg",
        alt: "Desert",
        caption: "The red cliffs were beautiful.It was really hot in the desert but we did a lot of walking through the canyons."
    },
    {
        file: "06.jpg",
        alt: "Fall",
        caption: "Fall is coming, I love when the leaves on the trees start to change color."
    },
    {
        file: "07.jpg",
        alt: "Plantation",
        caption: "I drove past this plantation yesterday, everything is so green!"
    },
    {
        file: "08.jpg",
        alt: "Dunes",
        caption: "My summer vacation to the Oregon Coast.I love the sandy dunes!"
    },
    {
        file: "09.jpg",
        alt: "Countryside Lane",
        caption: "We enjoyed a quiet stroll down this countryside lane."
    },
    {
        file: "10.jpg",
        alt: "Sunset",
        caption: "Sunset at the coast! The sky turned a lovely shade of orange."
    },
    {
        file: "11.jpg",
        alt: "Cave",
        caption: "I did a tour of a cave today and the view of the landscape below was breathtaking."
    },
    {
        file: "12.jpg",
        alt: "Bluebells",
        caption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
    }
]


//add data-lightbox attribute to anchor tags for LightBox2 functionality
const $roadtrip = $('figure a').attr("data-lightbox", "roadtrip");


//************************************************************************

// console.log lowercase version of whatever is typed into input: from https://stackoverflow.com/questions/41817155/filtering-images-live-search-by-caption
let $search = $('#searchInput');
// let $imgs = $('img');
let $imgs = $('img');


$search.keyup(function(event) {
    let value = $search.val().toLowerCase();
    $imgs.show();
    if (value !== '') {
        $imgs.not('[data-title*="' + value + '"]').hide();
    };
});



//LightBox2 ------------------------------
// mobile styling
    lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
  })
