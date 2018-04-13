let desiredEnergy = (2) // how much energy the consumer wants to derived by
// solar
let currentEnergy = (2) //current energy usage of consumer
let currentPrice = (2) //current energy price of consumer
let streetAddress = (2) //street address of consumer to 
// establish solar insolation
let cellNumber = (2) //number of cells on the solar panel
const panelEfficiency = (2) //efficiency of the solar panel
const cellArea = (2) // area in m^2 of each cell of the panel
const cellPrice = (2) // price for each indivudal cell of the panel


function payBack(desiredEnergy,currentEnergy,currentPrice,
	panelEfficiency,cellArea, cellPrice, streetAddress, cellNumber) {
	return (((((desiredEnergy*currentEnergy)/
(cellArea*panelEfficiency*streetAddress))*(cellPrice))/
(cellArea*panelEfficiency*streetAddress*cellNumber*currentPrice)))

	
};

console.log(payBack(););
