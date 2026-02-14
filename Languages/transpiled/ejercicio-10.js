console.log("************** DELIVERABLE 5. Slot Machine *********************");
class SlotMachine {
    #coins = 0;
    #getAnswer(earnedCoins) {
        if (earnedCoins && earnedCoins > 0) {
            console.log("Congratulations!!! You won " + earnedCoins + " coins!!");
        }
        else {
            console.log("Good luck next time!!");
        }
    }
    #generateReelsResult({ reelQuantity }) {
        return Array.from({ length: reelQuantity }, () => Math.random() >= 0.5);
    }
    play() {
        this.#coins++;
        const result = this.#generateReelsResult({ reelQuantity: 3 });
        if (result.every(value => value === true)) {
            const earnedCoins = this.#coins;
            this.#coins = 0;
            this.#getAnswer(earnedCoins);
        }
        else {
            this.#getAnswer();
        }
    }
}
const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
export {};
