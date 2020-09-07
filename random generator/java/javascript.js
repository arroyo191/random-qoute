var jokes = [
    'Dream it. Wish it. Do it.',
    ' The harder you work for something, the greater you will feel when you achieve it.',
    ' Do something today that your future self will thank you for',
    'The key to success is to focus on goals, not obstacles.',
    'All our dreams can come true, if we have the courage to pursue them.',
    'Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.',
    'Its Not Whether You Get Knocked Down, Its Whether You Get Up.'
]



function newJoke() {
    var randomNumber = (Math.floor(Math.random(7) * jokes.length))
    document.getElementById('qoute-display').innerHTML = jokes[randomNumber];
}

