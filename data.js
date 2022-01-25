

let first = [
    'Champ,',
    'Fact',
    'Everyboday says',
    'Dang...',
    'Check it:',
    'Just saying...',
    'Superstar,',
    'Tiger,',
    'Self,',
    'Know this:',
    'News alert:',
    'Girl,',
    'Ace,',
    'Excuse me but',
    'Experts agree:',
    'In my opinion,',
    'Hear ye, hear ye:',
    'Okay, listen up'
]

let second = [
    'the mere idea of you',
    'your soul',
    'your hair today',
    'everthing you do',
    'your personal style',
    'every thought you have',
    'that sparkle in your eye',
    'your presence here',
    'what you got going on',
    'the essential you',
    "your life's journey",
    'that saucy personality',
    'your DNA',
    'that brain of yours',
    'your choice of attire',
    'the way you roll',
    'whatever your secret is',
    "all of y'all",
    'pineapple on pizza really'
]

let third = [
    'has serious game,',
    'rains magic',
    'deserves the Nobel Prize,',
    'raises the roof,',
    'breeds miracles,',
    'is paying off big time,',
    'shows mad skills',
    'just shimmers',
    'is a national treasure',
    'gets the party hopping',
    'is the next big thing',
    'roars like a lion',
    'is a rainbow factory,',
    'is made of diamonds,',
    'makes birds sing,',
    'should be taught in school,',
    'makes the world gour `round',
    'is 100% legit,'
]

let fourth = [
    '24/7.',
    'can I get an amen?',
    'and thats a fact.',
    'so treat yourself.',
    'you feel me?',
    "that's just science.",
    'would I lie?',
    'or reals.',
    'mic drop.',
    'you hidden gem.',
    'snuggle bear.',
    'period.',
    'so lets celebrate with a slice of Hawaiian.',
    "now let's dance.",
    'high five.',
    'say it again',
    'according to CNN.',
    'so get used to it.'
]

let firstColumn = first.map((data) => {return {label: data, value: data}})
let secondColumn = second.map((data) => {return {label: data, value: data}})
let thirdColumn = third.map((data) => {return {label: data, value: data}})
let fourthColumn = fourth.map((data) => {return {label: data, value: data}})

export {    firstColumn,
            secondColumn,
            thirdColumn,
            fourthColumn
        }