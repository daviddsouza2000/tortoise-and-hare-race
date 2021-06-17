import React, { useState, useEffect } from 'react';
import Position from './Position';

function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}

function tortoise_move(tortoise){
    var n = getRandomInt();
    if (1 <= n && n <= 5) return Math.min(tortoise + 3, 70);
    else if (6 <= n && n <= 7) return Math.min(tortoise + 6, 70);
    else if (8 <= n && n <= 10) return Math.min(tortoise + 1, 70);
}

function hare_move(hare){
    var n = getRandomInt();
    if (1 <= n && n <= 2) return hare;
    else if (3 <= n && n <= 4) return Math.min(hare + 9, 70);
    else if (n == 5) return Math.max(hare - 12, 1);
    else if (6 <= n && n <= 8) return Math.min(hare + 1, 70);
    else if (9 <= n && n <= 10) return Math.max(hare - 2, 1);
}

export default function NumberLine({hare=1, tortoise=1}) {
    const [harePos, setHarePos] = useState(hare);
    const [tortoisePos, setTortoisePos] = useState(tortoise);

    const positions = [];

    useEffect(() => {
        const timer = setInterval(() => {
            setHarePos(hare_move(harePos));
            setTortoisePos(tortoise_move(tortoisePos));

            if (harePos === 70 || tortoisePos === 70) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer)
    });

    for(var i = 1; i<= 70; i++){
        if (harePos === i && tortoisePos === i) positions.push( < Position key={i}  num={i} hasHare={true} hasTortoise={true} /> );
        else if (harePos === i) positions.push( < Position key={i}  num={i} hasHare={true} /> );
        else if (tortoisePos === i) positions.push( < Position key={i}  num={i} hasTortoise={true} /> );
        else positions.push( < Position key={i}  num={i} /> );
    }

    return (
        <div>
            {positions}
        </div>
    )
}
