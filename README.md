# Rock paper scissors lab

## HTML Skeleton


- 3 divs that contain the sperate grid peices(rock, paper, scissors icons | throw button| enemy throw)
    - in first div: 3 pictures(actually radio buttons)

    - in middle div: throw button
        - wins span
        - losses span
        - total
        - retry button
    - in final div
        - hidden enemy picture wrapped in div
        - enemy's message(wow, you beat me!
                            Haha, take that
                            draw huh? LET's GOO!)
    
- js: 

- 1) grab dom elements 
- 2) initialize state(wins, total)
- 3) set event listeners
    - on click: 
        - increment total
        - generate computer guess
            - function getRandomThrow()
            - function computersThrow
        - show computers result
        - check and see if player guess is equal to computer guess
            - function didUserWin(player, computer)
        - show message based on result and increment wins accordingly
        - if player pushes retry reset all lets/displays. 
    

    