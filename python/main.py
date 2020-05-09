import os
import time
import random
win = 0
over = False
num = 0
run = True

def winner(win):
    return "Player" if win == 0 else "Bot"

ov = 0

while run:
    if over:
        print("winner: " + winner(win))
        quest = True
        print("do you want to retry or do you want quit? (r | q)")
        while quest:
            inp = input("> ")
            if inp == "q":
                quest = False
                run = False
                exit()
            elif inp == "r":
                quest = False
                os.system("cls")
                over = False
                num = 0
            else:
                print("unknown command!")
    else:
        random.seed(time.time())
        inp = int(input("Player> "))
        while inp > 10:
            inp = int(input("Player> "))
        num += inp
        print(f"New number: {num}")
        if num >= 100:
            over = True
            win = 0
        else:
            if 100-num <=  10:
                a = 100-num
                print(f"Bot   > {(100-num)}")
                num += a
                print(f"New number: {num}")
                over = True
                win = 1
            else:
                """ winable:
                x = random.randint(1, 10)
                num += x
                print(f"Bot   > {x}")
                print(f"New number: {num}") """
                if num < 60:
                    if inp == 1:
                        ov += 1
                        x = 10
                        num += x
                        print(f"Bot   > {x}")
                        print(f"New number: {num}")
                    else:
                        x = 12 - inp + ov
                        ov = 0
                        if x > 10:
                            ov = x - 10
                            x = 10
                        num += x
                        print(f"Bot   > {x}")
                        print(f"New number: {num}")
                elif num >= 60 and num < 67:
                    x = 67 - num
                    num += x
                    print(f"Bot   > {x}")
                    print(f"New number: {num}")
                elif num >= 68 and num < 78:
                    x = 78 - num
                    num += x
                    print(f"Bot   > {x}")
                    print(f"New number: {num}")
                elif num >= 79 and num < 89:
                    x = 89 - num
                    num += x
                    print(f"Bot   > {x}")
                    print(f"New number: {num}")