import { Dimensions } from 'react-native';

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //proporção do cabeçalho
    difficultLevel: 0.1,
    getColumnsAmount() {
        const totalWidth = Dimensions.get('window').width
        return Math.floor(totalWidth / this.blockSize)
    },
    getRowsAmount() {
        const totalHeigth = Dimensions.get('window').height
        const boardHeigth = totalHeigth * (1 - this.headerRatio)
        return Math.floor(boardHeigth / this.blockSize)
    },
}

export default params