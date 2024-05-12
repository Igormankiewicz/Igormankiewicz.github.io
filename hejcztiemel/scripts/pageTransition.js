console.log("Own a musket for home defense, since thats what the founding fathers intended. Four ruffians break into my house. What the devil? As I grab my powdered wig and Kentucky rifle. Blow a golf ball sized hole through the first man, he's dead on the spot.");
console.log("Draw my pistol on the second man, miss him entirely because it's smoothbore and nails the neighbors dog. I have to resort to the cannon mounted at the top of the stairs loaded with grape shot, Tally ho lads the grape shot shreds two men in the blast,")
console.log("the sound and extra shrapnel set off car alarms. Fix bayonet and charge the last terrified rapscallion. He Bleeds out waiting on the police to arrive since triangular bayonet wounds are impossible to stitch up. Just as the founding fathers intended.")

        window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})