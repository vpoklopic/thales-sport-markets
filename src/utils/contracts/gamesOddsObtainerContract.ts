export const gamesOddsObtainerContract = {
    addresses: {
        5: 'TBD',
        10: '0x3ff20410003767ede94c06c5df56968d90abae6c',
        42: 'TBD',
        69: 'TBD',
        420: '0x00d23ce013094f7100b681426c046023d1c02858',
    },
    abi: [
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_main',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_child',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_id',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'int16',
                    name: '_spread',
                    type: 'int16',
                },
                {
                    indexed: false,
                    internalType: 'uint256[]',
                    name: '_normalizedOdds',
                    type: 'uint256[]',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_type',
                    type: 'uint256',
                },
            ],
            name: 'CreateChildSpreadSportsMarket',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_main',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_child',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_id',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'uint24',
                    name: '_total',
                    type: 'uint24',
                },
                {
                    indexed: false,
                    internalType: 'uint256[]',
                    name: '_normalizedOdds',
                    type: 'uint256[]',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_type',
                    type: 'uint256',
                },
            ],
            name: 'CreateChildTotalSportsMarket',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_requestId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_id',
                    type: 'bytes32',
                },
                {
                    components: [
                        {
                            internalType: 'bytes32',
                            name: 'gameId',
                            type: 'bytes32',
                        },
                        {
                            internalType: 'int24',
                            name: 'homeOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int24',
                            name: 'awayOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int24',
                            name: 'drawOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int16',
                            name: 'spreadHome',
                            type: 'int16',
                        },
                        {
                            internalType: 'int24',
                            name: 'spreadHomeOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int16',
                            name: 'spreadAway',
                            type: 'int16',
                        },
                        {
                            internalType: 'int24',
                            name: 'spreadAwayOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'uint24',
                            name: 'totalOver',
                            type: 'uint24',
                        },
                        {
                            internalType: 'int24',
                            name: 'totalOverOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'uint24',
                            name: 'totalUnder',
                            type: 'uint24',
                        },
                        {
                            internalType: 'int24',
                            name: 'totalUnderOdds',
                            type: 'int24',
                        },
                    ],
                    indexed: false,
                    internalType: 'struct IGamesOddsObtainer.GameOdds',
                    name: '_game',
                    type: 'tuple',
                },
                {
                    indexed: false,
                    internalType: 'uint256[]',
                    name: '_normalizedOdds',
                    type: 'uint256[]',
                },
            ],
            name: 'GameOddsAdded',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_id',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_market',
                    type: 'address',
                },
                {
                    components: [
                        {
                            internalType: 'bytes32',
                            name: 'gameId',
                            type: 'bytes32',
                        },
                        {
                            internalType: 'int24',
                            name: 'homeOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int24',
                            name: 'awayOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int24',
                            name: 'drawOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int16',
                            name: 'spreadHome',
                            type: 'int16',
                        },
                        {
                            internalType: 'int24',
                            name: 'spreadHomeOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int16',
                            name: 'spreadAway',
                            type: 'int16',
                        },
                        {
                            internalType: 'int24',
                            name: 'spreadAwayOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'uint24',
                            name: 'totalOver',
                            type: 'uint24',
                        },
                        {
                            internalType: 'int24',
                            name: 'totalOverOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'uint24',
                            name: 'totalUnder',
                            type: 'uint24',
                        },
                        {
                            internalType: 'int24',
                            name: 'totalUnderOdds',
                            type: 'int24',
                        },
                    ],
                    indexed: false,
                    internalType: 'struct IGamesOddsObtainer.GameOdds',
                    name: '_game',
                    type: 'tuple',
                },
                {
                    indexed: false,
                    internalType: 'uint256[]',
                    name: '_normalizedChildOdds',
                    type: 'uint256[]',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_type',
                    type: 'uint256',
                },
            ],
            name: 'GamedOddsAddedChild',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_requestId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_marketAddress',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_id',
                    type: 'bytes32',
                },
                {
                    components: [
                        {
                            internalType: 'bytes32',
                            name: 'gameId',
                            type: 'bytes32',
                        },
                        {
                            internalType: 'int24',
                            name: 'homeOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int24',
                            name: 'awayOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int24',
                            name: 'drawOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int16',
                            name: 'spreadHome',
                            type: 'int16',
                        },
                        {
                            internalType: 'int24',
                            name: 'spreadHomeOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int16',
                            name: 'spreadAway',
                            type: 'int16',
                        },
                        {
                            internalType: 'int24',
                            name: 'spreadAwayOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'uint24',
                            name: 'totalOver',
                            type: 'uint24',
                        },
                        {
                            internalType: 'int24',
                            name: 'totalOverOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'uint24',
                            name: 'totalUnder',
                            type: 'uint24',
                        },
                        {
                            internalType: 'int24',
                            name: 'totalUnderOdds',
                            type: 'int24',
                        },
                    ],
                    indexed: false,
                    internalType: 'struct IGamesOddsObtainer.GameOdds',
                    name: '_game',
                    type: 'tuple',
                },
            ],
            name: 'InvalidOddsForMarket',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_consumer',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_verifier',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_sportsManager',
                    type: 'address',
                },
            ],
            name: 'NewContractAddresses',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_marketAddress',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_id',
                    type: 'bytes32',
                },
            ],
            name: 'OddsCircuitBreaker',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'oldOwner',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'OwnerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'OwnerNominated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bool',
                    name: 'isPaused',
                    type: 'bool',
                },
            ],
            name: 'PauseChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_child',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_outcome',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_main',
                    type: 'address',
                },
            ],
            name: 'ResolveChildMarket',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_sportId',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'bool',
                    name: '_isSupported',
                    type: 'bool',
                },
            ],
            name: 'SupportedSportForTotalAndSpreadAdded',
            type: 'event',
        },
        {
            inputs: [],
            name: 'AWAY_WIN',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'CANCELLED',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'HOME_WIN',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'MIN_TAG_NUMBER',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'TAG_NUMBER_SPREAD',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'TAG_NUMBER_TOTAL',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'acceptOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '_gameId',
                    type: 'bytes32',
                },
                {
                    internalType: 'bool',
                    name: '_useBackup',
                    type: 'bool',
                },
            ],
            name: 'areOddsValid',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'backupOdds',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: 'gameId',
                    type: 'bytes32',
                },
                {
                    internalType: 'int24',
                    name: 'homeOdds',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: 'awayOdds',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: 'drawOdds',
                    type: 'int24',
                },
                {
                    internalType: 'int16',
                    name: 'spreadHome',
                    type: 'int16',
                },
                {
                    internalType: 'int24',
                    name: 'spreadHomeOdds',
                    type: 'int24',
                },
                {
                    internalType: 'int16',
                    name: 'spreadAway',
                    type: 'int16',
                },
                {
                    internalType: 'int24',
                    name: 'spreadAwayOdds',
                    type: 'int24',
                },
                {
                    internalType: 'uint24',
                    name: 'totalOver',
                    type: 'uint24',
                },
                {
                    internalType: 'int24',
                    name: 'totalOverOdds',
                    type: 'int24',
                },
                {
                    internalType: 'uint24',
                    name: 'totalUnder',
                    type: 'uint24',
                },
                {
                    internalType: 'int24',
                    name: 'totalUnderOdds',
                    type: 'int24',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'childMarketCreated',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'childMarketMainMarket',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'childMarketSread',
            outputs: [
                {
                    internalType: 'int16',
                    name: '',
                    type: 'int16',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'childMarketTotal',
            outputs: [
                {
                    internalType: 'uint24',
                    name: '',
                    type: 'uint24',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'consumer',
            outputs: [
                {
                    internalType: 'contract ITherundownConsumer',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'currentActiveSpreadChildMarket',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'currentActiveTotalChildMarket',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'doesSportSupportSpreadAndTotal',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'gameIdPerChildMarket',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'gameOdds',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: 'gameId',
                    type: 'bytes32',
                },
                {
                    internalType: 'int24',
                    name: 'homeOdds',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: 'awayOdds',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: 'drawOdds',
                    type: 'int24',
                },
                {
                    internalType: 'int16',
                    name: 'spreadHome',
                    type: 'int16',
                },
                {
                    internalType: 'int24',
                    name: 'spreadHomeOdds',
                    type: 'int24',
                },
                {
                    internalType: 'int16',
                    name: 'spreadAway',
                    type: 'int16',
                },
                {
                    internalType: 'int24',
                    name: 'spreadAwayOdds',
                    type: 'int24',
                },
                {
                    internalType: 'uint24',
                    name: 'totalOver',
                    type: 'uint24',
                },
                {
                    internalType: 'int24',
                    name: 'totalOverOdds',
                    type: 'int24',
                },
                {
                    internalType: 'uint24',
                    name: 'totalUnder',
                    type: 'uint24',
                },
                {
                    internalType: 'int24',
                    name: 'totalUnderOdds',
                    type: 'int24',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_parent',
                    type: 'address',
                },
            ],
            name: 'getAllChildMarketsFromParent',
            outputs: [
                {
                    internalType: 'address[]',
                    name: '',
                    type: 'address[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '_gameId',
                    type: 'bytes32',
                },
            ],
            name: 'getLinesForGame',
            outputs: [
                {
                    internalType: 'int16',
                    name: '',
                    type: 'int16',
                },
                {
                    internalType: 'int16',
                    name: '',
                    type: 'int16',
                },
                {
                    internalType: 'uint24',
                    name: '',
                    type: 'uint24',
                },
                {
                    internalType: 'uint24',
                    name: '',
                    type: 'uint24',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_market',
                    type: 'address',
                },
            ],
            name: 'getNormalizedChildOdds',
            outputs: [
                {
                    internalType: 'uint256[]',
                    name: '',
                    type: 'uint256[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '_gameId',
                    type: 'bytes32',
                },
            ],
            name: 'getNormalizedOdds',
            outputs: [
                {
                    internalType: 'uint256[]',
                    name: '',
                    type: 'uint256[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '_gameId',
                    type: 'bytes32',
                },
            ],
            name: 'getOddsForGame',
            outputs: [
                {
                    internalType: 'int24',
                    name: '',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: '',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: '',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: '',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: '',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: '',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: '',
                    type: 'int24',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_owner',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_consumer',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_verifier',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_sportsManager',
                    type: 'address',
                },
                {
                    internalType: 'uint256[]',
                    name: '_supportedSportIds',
                    type: 'uint256[]',
                },
            ],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'invalidOdds',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'isSpreadChildMarket',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'lastPauseTime',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'mainMarketChildMarketIndex',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'int16',
                    name: '',
                    type: 'int16',
                },
            ],
            name: 'mainMarketSpreadChildMarket',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'uint24',
                    name: '',
                    type: 'uint24',
                },
            ],
            name: 'mainMarketTotalChildMarket',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_owner',
                    type: 'address',
                },
            ],
            name: 'nominateNewOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'nominatedOwner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'numberOfChildMarkets',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'requestId',
                    type: 'bytes32',
                },
                {
                    components: [
                        {
                            internalType: 'bytes32',
                            name: 'gameId',
                            type: 'bytes32',
                        },
                        {
                            internalType: 'int24',
                            name: 'homeOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int24',
                            name: 'awayOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int24',
                            name: 'drawOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int16',
                            name: 'spreadHome',
                            type: 'int16',
                        },
                        {
                            internalType: 'int24',
                            name: 'spreadHomeOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'int16',
                            name: 'spreadAway',
                            type: 'int16',
                        },
                        {
                            internalType: 'int24',
                            name: 'spreadAwayOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'uint24',
                            name: 'totalOver',
                            type: 'uint24',
                        },
                        {
                            internalType: 'int24',
                            name: 'totalOverOdds',
                            type: 'int24',
                        },
                        {
                            internalType: 'uint24',
                            name: 'totalUnder',
                            type: 'uint24',
                        },
                        {
                            internalType: 'int24',
                            name: 'totalUnderOdds',
                            type: 'int24',
                        },
                    ],
                    internalType: 'struct IGamesOddsObtainer.GameOdds',
                    name: '_game',
                    type: 'tuple',
                },
                {
                    internalType: 'uint256',
                    name: '_sportId',
                    type: 'uint256',
                },
            ],
            name: 'obtainOdds',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'oddsLastPulledForGame',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_main',
                    type: 'address',
                },
                {
                    internalType: 'bool',
                    name: '_flag',
                    type: 'bool',
                },
            ],
            name: 'pauseUnpauseChildMarkets',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paused',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_main',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_outcome',
                    type: 'uint256',
                },
                {
                    internalType: 'uint8',
                    name: '_homeScore',
                    type: 'uint8',
                },
                {
                    internalType: 'uint8',
                    name: '_awayScore',
                    type: 'uint8',
                },
            ],
            name: 'resolveChildMarkets',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '_gameId',
                    type: 'bytes32',
                },
            ],
            name: 'setBackupOddsAsMainOddsForGame',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_consumer',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_verifier',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_sportsManager',
                    type: 'address',
                },
            ],
            name: 'setContracts',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '_gameId',
                    type: 'bytes32',
                },
                {
                    internalType: 'int24',
                    name: '_homeOdds',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: '_awayOdds',
                    type: 'int24',
                },
                {
                    internalType: 'int24',
                    name: '_drawOdds',
                    type: 'int24',
                },
            ],
            name: 'setFirstOdds',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_owner',
                    type: 'address',
                },
            ],
            name: 'setOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bool',
                    name: '_paused',
                    type: 'bool',
                },
            ],
            name: 'setPaused',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_sportId',
                    type: 'uint256',
                },
                {
                    internalType: 'bool',
                    name: '_isSupported',
                    type: 'bool',
                },
            ],
            name: 'setSupportedSportForTotalAndSpread',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sportsManager',
            outputs: [
                {
                    internalType: 'contract ISportPositionalMarketManager',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'proxyAddress',
                    type: 'address',
                },
            ],
            name: 'transferOwnershipAtInit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'verifier',
            outputs: [
                {
                    internalType: 'contract ITherundownConsumerVerifier',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
    ],
};

export default gamesOddsObtainerContract;
