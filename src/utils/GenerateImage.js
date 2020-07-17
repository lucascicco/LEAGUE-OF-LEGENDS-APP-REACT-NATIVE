export function GenerationRequire(rank){
    switch(rank){
        case 'UNRANKED':
            return require('~/assets/Ranks/UNRANKED.png')
        case 'IRON':
            return require('~/assets/Ranks/IRON.png')
        case 'BRONZE':
            return require('~/assets/Ranks/BRONZE.png')
        case 'SILVER':
            return require('~/assets/Ranks/SILVER.png')
        case 'GOLD':
            return require('~/assets/Ranks/GOLD.png')
        case 'PLATINUM':
            return require('~/assets/Ranks/PLATINUM.png')
        case 'DIAMOND':
            return require('~/assets/Ranks/DIAMOND.png')
        case 'MASTER':  
            return require('~/assets/Ranks/MASTER.png')
        case 'GRANMASTER':
            return require('~/assets/Ranks/GRANMASTER.png')
        case 'CHALLENGER':
            return require('~/assets/Ranks/CHALLENGER.png')
        default:
            return require('~/assets/Ranks/UNRANKED.png')
    }
}

