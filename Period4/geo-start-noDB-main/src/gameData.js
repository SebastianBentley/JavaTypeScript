const gameArea = {
    "type": "Polygon",
    "coordinates": [
        [
            [
                12.548618316650389,
                55.784730306059046
            ],
            [
                12.556514739990233,
                55.77720056294102
            ],
            [
                12.581663131713867,
                55.778407350449804
            ],
            [
                12.58732795715332,
                55.78752945489356
            ],
            [
                12.57205009460449,
                55.794429945434764
            ],
            [
                12.558488845825195,
                55.7918243094437
            ],
            [
                12.548618316650389,
                55.784730306059046
            ]
        ]
    ]
}



const players = [
    {
        "type": "Feature",
        "properties": {
            "name": "p1-outside"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.550506591796875,
                55.788977211582065
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "p2-outside"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.548704147338865,
                55.77990371506161
            ]
        }
    },
    {
        "type": "Feature",
        "properties": { "name": "p3-inside" },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.562351226806639,
                55.78979758315554
            ]
        }
    },
    {
        "type": "Feature",
        "properties": { "name": "p4-inside" },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12.566642761230469,
                55.78511640751059
            ]
        }
    }
]


//module.exports = {gameArea, players};
export {gameArea, players};