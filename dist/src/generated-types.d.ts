/**
 * Constant names for all available codecs
 */
export declare type CodecConstant = 'IDENTITY' | 'CIDV1' | 'CIDV2' | 'CIDV3' | 'IP4' | 'TCP' | 'SHA1' | 'SHA2_256' | 'SHA2_512' | 'SHA3_512' | 'SHA3_384' | 'SHA3_256' | 'SHA3_224' | 'SHAKE_128' | 'SHAKE_256' | 'KECCAK_224' | 'KECCAK_256' | 'KECCAK_384' | 'KECCAK_512' | 'BLAKE3' | 'DCCP' | 'MURMUR3_128' | 'MURMUR3_32' | 'IP6' | 'IP6ZONE' | 'PATH' | 'MULTICODEC' | 'MULTIHASH' | 'MULTIADDR' | 'MULTIBASE' | 'DNS' | 'DNS4' | 'DNS6' | 'DNSADDR' | 'PROTOBUF' | 'CBOR' | 'RAW' | 'DBL_SHA2_256' | 'RLP' | 'BENCODE' | 'DAG_PB' | 'DAG_CBOR' | 'LIBP2P_KEY' | 'GIT_RAW' | 'TORRENT_INFO' | 'TORRENT_FILE' | 'LEOFCOIN_BLOCK' | 'LEOFCOIN_TX' | 'LEOFCOIN_PR' | 'SCTP' | 'DAG_JOSE' | 'DAG_COSE' | 'ETH_BLOCK' | 'ETH_BLOCK_LIST' | 'ETH_TX_TRIE' | 'ETH_TX' | 'ETH_TX_RECEIPT_TRIE' | 'ETH_TX_RECEIPT' | 'ETH_STATE_TRIE' | 'ETH_ACCOUNT_SNAPSHOT' | 'ETH_STORAGE_TRIE' | 'BITCOIN_BLOCK' | 'BITCOIN_TX' | 'BITCOIN_WITNESS_COMMITMENT' | 'ZCASH_BLOCK' | 'ZCASH_TX' | 'DOCID' | 'STELLAR_BLOCK' | 'STELLAR_TX' | 'MD4' | 'MD5' | 'BMT' | 'DECRED_BLOCK' | 'DECRED_TX' | 'IPLD_NS' | 'IPFS_NS' | 'SWARM_NS' | 'IPNS_NS' | 'ZERONET' | 'SECP256K1_PUB' | 'BLS12_381_G1_PUB' | 'BLS12_381_G2_PUB' | 'X25519_PUB' | 'ED25519_PUB' | 'BLS12_381_G1G2_PUB' | 'DASH_BLOCK' | 'DASH_TX' | 'SWARM_MANIFEST' | 'SWARM_FEED' | 'UDP' | 'P2P_WEBRTC_STAR' | 'P2P_WEBRTC_DIRECT' | 'P2P_STARDUST' | 'P2P_CIRCUIT' | 'DAG_JSON' | 'UDT' | 'UTP' | 'UNIX' | 'P2P' | 'IPFS' | 'HTTPS' | 'ONION' | 'ONION3' | 'GARLIC64' | 'GARLIC32' | 'TLS' | 'QUIC' | 'WS' | 'WSS' | 'P2P_WEBSOCKET_STAR' | 'HTTP' | 'JSON' | 'MESSAGEPACK' | 'LIBP2P_PEER_RECORD' | 'SHA2_256_TRUNC254_PADDED' | 'RIPEMD_128' | 'RIPEMD_160' | 'RIPEMD_256' | 'RIPEMD_320' | 'X11' | 'P256_PUB' | 'P384_PUB' | 'P521_PUB' | 'ED448_PUB' | 'X448_PUB' | 'ED25519_PRIV' | 'KANGAROOTWELVE' | 'SM3_256' | 'BLAKE2B_8' | 'BLAKE2B_16' | 'BLAKE2B_24' | 'BLAKE2B_32' | 'BLAKE2B_40' | 'BLAKE2B_48' | 'BLAKE2B_56' | 'BLAKE2B_64' | 'BLAKE2B_72' | 'BLAKE2B_80' | 'BLAKE2B_88' | 'BLAKE2B_96' | 'BLAKE2B_104' | 'BLAKE2B_112' | 'BLAKE2B_120' | 'BLAKE2B_128' | 'BLAKE2B_136' | 'BLAKE2B_144' | 'BLAKE2B_152' | 'BLAKE2B_160' | 'BLAKE2B_168' | 'BLAKE2B_176' | 'BLAKE2B_184' | 'BLAKE2B_192' | 'BLAKE2B_200' | 'BLAKE2B_208' | 'BLAKE2B_216' | 'BLAKE2B_224' | 'BLAKE2B_232' | 'BLAKE2B_240' | 'BLAKE2B_248' | 'BLAKE2B_256' | 'BLAKE2B_264' | 'BLAKE2B_272' | 'BLAKE2B_280' | 'BLAKE2B_288' | 'BLAKE2B_296' | 'BLAKE2B_304' | 'BLAKE2B_312' | 'BLAKE2B_320' | 'BLAKE2B_328' | 'BLAKE2B_336' | 'BLAKE2B_344' | 'BLAKE2B_352' | 'BLAKE2B_360' | 'BLAKE2B_368' | 'BLAKE2B_376' | 'BLAKE2B_384' | 'BLAKE2B_392' | 'BLAKE2B_400' | 'BLAKE2B_408' | 'BLAKE2B_416' | 'BLAKE2B_424' | 'BLAKE2B_432' | 'BLAKE2B_440' | 'BLAKE2B_448' | 'BLAKE2B_456' | 'BLAKE2B_464' | 'BLAKE2B_472' | 'BLAKE2B_480' | 'BLAKE2B_488' | 'BLAKE2B_496' | 'BLAKE2B_504' | 'BLAKE2B_512' | 'BLAKE2S_8' | 'BLAKE2S_16' | 'BLAKE2S_24' | 'BLAKE2S_32' | 'BLAKE2S_40' | 'BLAKE2S_48' | 'BLAKE2S_56' | 'BLAKE2S_64' | 'BLAKE2S_72' | 'BLAKE2S_80' | 'BLAKE2S_88' | 'BLAKE2S_96' | 'BLAKE2S_104' | 'BLAKE2S_112' | 'BLAKE2S_120' | 'BLAKE2S_128' | 'BLAKE2S_136' | 'BLAKE2S_144' | 'BLAKE2S_152' | 'BLAKE2S_160' | 'BLAKE2S_168' | 'BLAKE2S_176' | 'BLAKE2S_184' | 'BLAKE2S_192' | 'BLAKE2S_200' | 'BLAKE2S_208' | 'BLAKE2S_216' | 'BLAKE2S_224' | 'BLAKE2S_232' | 'BLAKE2S_240' | 'BLAKE2S_248' | 'BLAKE2S_256' | 'SKEIN256_8' | 'SKEIN256_16' | 'SKEIN256_24' | 'SKEIN256_32' | 'SKEIN256_40' | 'SKEIN256_48' | 'SKEIN256_56' | 'SKEIN256_64' | 'SKEIN256_72' | 'SKEIN256_80' | 'SKEIN256_88' | 'SKEIN256_96' | 'SKEIN256_104' | 'SKEIN256_112' | 'SKEIN256_120' | 'SKEIN256_128' | 'SKEIN256_136' | 'SKEIN256_144' | 'SKEIN256_152' | 'SKEIN256_160' | 'SKEIN256_168' | 'SKEIN256_176' | 'SKEIN256_184' | 'SKEIN256_192' | 'SKEIN256_200' | 'SKEIN256_208' | 'SKEIN256_216' | 'SKEIN256_224' | 'SKEIN256_232' | 'SKEIN256_240' | 'SKEIN256_248' | 'SKEIN256_256' | 'SKEIN512_8' | 'SKEIN512_16' | 'SKEIN512_24' | 'SKEIN512_32' | 'SKEIN512_40' | 'SKEIN512_48' | 'SKEIN512_56' | 'SKEIN512_64' | 'SKEIN512_72' | 'SKEIN512_80' | 'SKEIN512_88' | 'SKEIN512_96' | 'SKEIN512_104' | 'SKEIN512_112' | 'SKEIN512_120' | 'SKEIN512_128' | 'SKEIN512_136' | 'SKEIN512_144' | 'SKEIN512_152' | 'SKEIN512_160' | 'SKEIN512_168' | 'SKEIN512_176' | 'SKEIN512_184' | 'SKEIN512_192' | 'SKEIN512_200' | 'SKEIN512_208' | 'SKEIN512_216' | 'SKEIN512_224' | 'SKEIN512_232' | 'SKEIN512_240' | 'SKEIN512_248' | 'SKEIN512_256' | 'SKEIN512_264' | 'SKEIN512_272' | 'SKEIN512_280' | 'SKEIN512_288' | 'SKEIN512_296' | 'SKEIN512_304' | 'SKEIN512_312' | 'SKEIN512_320' | 'SKEIN512_328' | 'SKEIN512_336' | 'SKEIN512_344' | 'SKEIN512_352' | 'SKEIN512_360' | 'SKEIN512_368' | 'SKEIN512_376' | 'SKEIN512_384' | 'SKEIN512_392' | 'SKEIN512_400' | 'SKEIN512_408' | 'SKEIN512_416' | 'SKEIN512_424' | 'SKEIN512_432' | 'SKEIN512_440' | 'SKEIN512_448' | 'SKEIN512_456' | 'SKEIN512_464' | 'SKEIN512_472' | 'SKEIN512_480' | 'SKEIN512_488' | 'SKEIN512_496' | 'SKEIN512_504' | 'SKEIN512_512' | 'SKEIN1024_8' | 'SKEIN1024_16' | 'SKEIN1024_24' | 'SKEIN1024_32' | 'SKEIN1024_40' | 'SKEIN1024_48' | 'SKEIN1024_56' | 'SKEIN1024_64' | 'SKEIN1024_72' | 'SKEIN1024_80' | 'SKEIN1024_88' | 'SKEIN1024_96' | 'SKEIN1024_104' | 'SKEIN1024_112' | 'SKEIN1024_120' | 'SKEIN1024_128' | 'SKEIN1024_136' | 'SKEIN1024_144' | 'SKEIN1024_152' | 'SKEIN1024_160' | 'SKEIN1024_168' | 'SKEIN1024_176' | 'SKEIN1024_184' | 'SKEIN1024_192' | 'SKEIN1024_200' | 'SKEIN1024_208' | 'SKEIN1024_216' | 'SKEIN1024_224' | 'SKEIN1024_232' | 'SKEIN1024_240' | 'SKEIN1024_248' | 'SKEIN1024_256' | 'SKEIN1024_264' | 'SKEIN1024_272' | 'SKEIN1024_280' | 'SKEIN1024_288' | 'SKEIN1024_296' | 'SKEIN1024_304' | 'SKEIN1024_312' | 'SKEIN1024_320' | 'SKEIN1024_328' | 'SKEIN1024_336' | 'SKEIN1024_344' | 'SKEIN1024_352' | 'SKEIN1024_360' | 'SKEIN1024_368' | 'SKEIN1024_376' | 'SKEIN1024_384' | 'SKEIN1024_392' | 'SKEIN1024_400' | 'SKEIN1024_408' | 'SKEIN1024_416' | 'SKEIN1024_424' | 'SKEIN1024_432' | 'SKEIN1024_440' | 'SKEIN1024_448' | 'SKEIN1024_456' | 'SKEIN1024_464' | 'SKEIN1024_472' | 'SKEIN1024_480' | 'SKEIN1024_488' | 'SKEIN1024_496' | 'SKEIN1024_504' | 'SKEIN1024_512' | 'SKEIN1024_520' | 'SKEIN1024_528' | 'SKEIN1024_536' | 'SKEIN1024_544' | 'SKEIN1024_552' | 'SKEIN1024_560' | 'SKEIN1024_568' | 'SKEIN1024_576' | 'SKEIN1024_584' | 'SKEIN1024_592' | 'SKEIN1024_600' | 'SKEIN1024_608' | 'SKEIN1024_616' | 'SKEIN1024_624' | 'SKEIN1024_632' | 'SKEIN1024_640' | 'SKEIN1024_648' | 'SKEIN1024_656' | 'SKEIN1024_664' | 'SKEIN1024_672' | 'SKEIN1024_680' | 'SKEIN1024_688' | 'SKEIN1024_696' | 'SKEIN1024_704' | 'SKEIN1024_712' | 'SKEIN1024_720' | 'SKEIN1024_728' | 'SKEIN1024_736' | 'SKEIN1024_744' | 'SKEIN1024_752' | 'SKEIN1024_760' | 'SKEIN1024_768' | 'SKEIN1024_776' | 'SKEIN1024_784' | 'SKEIN1024_792' | 'SKEIN1024_800' | 'SKEIN1024_808' | 'SKEIN1024_816' | 'SKEIN1024_824' | 'SKEIN1024_832' | 'SKEIN1024_840' | 'SKEIN1024_848' | 'SKEIN1024_856' | 'SKEIN1024_864' | 'SKEIN1024_872' | 'SKEIN1024_880' | 'SKEIN1024_888' | 'SKEIN1024_896' | 'SKEIN1024_904' | 'SKEIN1024_912' | 'SKEIN1024_920' | 'SKEIN1024_928' | 'SKEIN1024_936' | 'SKEIN1024_944' | 'SKEIN1024_952' | 'SKEIN1024_960' | 'SKEIN1024_968' | 'SKEIN1024_976' | 'SKEIN1024_984' | 'SKEIN1024_992' | 'SKEIN1024_1000' | 'SKEIN1024_1008' | 'SKEIN1024_1016' | 'SKEIN1024_1024' | 'POSEIDON_BLS12_381_A2_FC1' | 'POSEIDON_BLS12_381_A2_FC1_SC' | 'ZEROXCERT_IMPRINT_256' | 'FIL_COMMITMENT_UNSEALED' | 'FIL_COMMITMENT_SEALED' | 'HOLOCHAIN_ADR_V0' | 'HOLOCHAIN_ADR_V1' | 'HOLOCHAIN_KEY_V0' | 'HOLOCHAIN_KEY_V1' | 'HOLOCHAIN_SIG_V0' | 'HOLOCHAIN_SIG_V1' | 'SKYNET_NS';
/**
 * Names for all available codecs
 */
export declare type CodecName = 'identity' | 'cidv1' | 'cidv2' | 'cidv3' | 'ip4' | 'tcp' | 'sha1' | 'sha2-256' | 'sha2-512' | 'sha3-512' | 'sha3-384' | 'sha3-256' | 'sha3-224' | 'shake-128' | 'shake-256' | 'keccak-224' | 'keccak-256' | 'keccak-384' | 'keccak-512' | 'blake3' | 'dccp' | 'murmur3-128' | 'murmur3-32' | 'ip6' | 'ip6zone' | 'path' | 'multicodec' | 'multihash' | 'multiaddr' | 'multibase' | 'dns' | 'dns4' | 'dns6' | 'dnsaddr' | 'protobuf' | 'cbor' | 'raw' | 'dbl-sha2-256' | 'rlp' | 'bencode' | 'dag-pb' | 'dag-cbor' | 'libp2p-key' | 'git-raw' | 'torrent-info' | 'torrent-file' | 'leofcoin-block' | 'leofcoin-tx' | 'leofcoin-pr' | 'sctp' | 'dag-jose' | 'dag-cose' | 'eth-block' | 'eth-block-list' | 'eth-tx-trie' | 'eth-tx' | 'eth-tx-receipt-trie' | 'eth-tx-receipt' | 'eth-state-trie' | 'eth-account-snapshot' | 'eth-storage-trie' | 'bitcoin-block' | 'bitcoin-tx' | 'bitcoin-witness-commitment' | 'zcash-block' | 'zcash-tx' | 'docid' | 'stellar-block' | 'stellar-tx' | 'md4' | 'md5' | 'bmt' | 'decred-block' | 'decred-tx' | 'ipld-ns' | 'ipfs-ns' | 'swarm-ns' | 'ipns-ns' | 'zeronet' | 'secp256k1-pub' | 'bls12_381-g1-pub' | 'bls12_381-g2-pub' | 'x25519-pub' | 'ed25519-pub' | 'bls12_381-g1g2-pub' | 'dash-block' | 'dash-tx' | 'swarm-manifest' | 'swarm-feed' | 'udp' | 'p2p-webrtc-star' | 'p2p-webrtc-direct' | 'p2p-stardust' | 'p2p-circuit' | 'dag-json' | 'udt' | 'utp' | 'unix' | 'p2p' | 'ipfs' | 'https' | 'onion' | 'onion3' | 'garlic64' | 'garlic32' | 'tls' | 'quic' | 'ws' | 'wss' | 'p2p-websocket-star' | 'http' | 'json' | 'messagepack' | 'libp2p-peer-record' | 'sha2-256-trunc254-padded' | 'ripemd-128' | 'ripemd-160' | 'ripemd-256' | 'ripemd-320' | 'x11' | 'p256-pub' | 'p384-pub' | 'p521-pub' | 'ed448-pub' | 'x448-pub' | 'ed25519-priv' | 'kangarootwelve' | 'sm3-256' | 'blake2b-8' | 'blake2b-16' | 'blake2b-24' | 'blake2b-32' | 'blake2b-40' | 'blake2b-48' | 'blake2b-56' | 'blake2b-64' | 'blake2b-72' | 'blake2b-80' | 'blake2b-88' | 'blake2b-96' | 'blake2b-104' | 'blake2b-112' | 'blake2b-120' | 'blake2b-128' | 'blake2b-136' | 'blake2b-144' | 'blake2b-152' | 'blake2b-160' | 'blake2b-168' | 'blake2b-176' | 'blake2b-184' | 'blake2b-192' | 'blake2b-200' | 'blake2b-208' | 'blake2b-216' | 'blake2b-224' | 'blake2b-232' | 'blake2b-240' | 'blake2b-248' | 'blake2b-256' | 'blake2b-264' | 'blake2b-272' | 'blake2b-280' | 'blake2b-288' | 'blake2b-296' | 'blake2b-304' | 'blake2b-312' | 'blake2b-320' | 'blake2b-328' | 'blake2b-336' | 'blake2b-344' | 'blake2b-352' | 'blake2b-360' | 'blake2b-368' | 'blake2b-376' | 'blake2b-384' | 'blake2b-392' | 'blake2b-400' | 'blake2b-408' | 'blake2b-416' | 'blake2b-424' | 'blake2b-432' | 'blake2b-440' | 'blake2b-448' | 'blake2b-456' | 'blake2b-464' | 'blake2b-472' | 'blake2b-480' | 'blake2b-488' | 'blake2b-496' | 'blake2b-504' | 'blake2b-512' | 'blake2s-8' | 'blake2s-16' | 'blake2s-24' | 'blake2s-32' | 'blake2s-40' | 'blake2s-48' | 'blake2s-56' | 'blake2s-64' | 'blake2s-72' | 'blake2s-80' | 'blake2s-88' | 'blake2s-96' | 'blake2s-104' | 'blake2s-112' | 'blake2s-120' | 'blake2s-128' | 'blake2s-136' | 'blake2s-144' | 'blake2s-152' | 'blake2s-160' | 'blake2s-168' | 'blake2s-176' | 'blake2s-184' | 'blake2s-192' | 'blake2s-200' | 'blake2s-208' | 'blake2s-216' | 'blake2s-224' | 'blake2s-232' | 'blake2s-240' | 'blake2s-248' | 'blake2s-256' | 'skein256-8' | 'skein256-16' | 'skein256-24' | 'skein256-32' | 'skein256-40' | 'skein256-48' | 'skein256-56' | 'skein256-64' | 'skein256-72' | 'skein256-80' | 'skein256-88' | 'skein256-96' | 'skein256-104' | 'skein256-112' | 'skein256-120' | 'skein256-128' | 'skein256-136' | 'skein256-144' | 'skein256-152' | 'skein256-160' | 'skein256-168' | 'skein256-176' | 'skein256-184' | 'skein256-192' | 'skein256-200' | 'skein256-208' | 'skein256-216' | 'skein256-224' | 'skein256-232' | 'skein256-240' | 'skein256-248' | 'skein256-256' | 'skein512-8' | 'skein512-16' | 'skein512-24' | 'skein512-32' | 'skein512-40' | 'skein512-48' | 'skein512-56' | 'skein512-64' | 'skein512-72' | 'skein512-80' | 'skein512-88' | 'skein512-96' | 'skein512-104' | 'skein512-112' | 'skein512-120' | 'skein512-128' | 'skein512-136' | 'skein512-144' | 'skein512-152' | 'skein512-160' | 'skein512-168' | 'skein512-176' | 'skein512-184' | 'skein512-192' | 'skein512-200' | 'skein512-208' | 'skein512-216' | 'skein512-224' | 'skein512-232' | 'skein512-240' | 'skein512-248' | 'skein512-256' | 'skein512-264' | 'skein512-272' | 'skein512-280' | 'skein512-288' | 'skein512-296' | 'skein512-304' | 'skein512-312' | 'skein512-320' | 'skein512-328' | 'skein512-336' | 'skein512-344' | 'skein512-352' | 'skein512-360' | 'skein512-368' | 'skein512-376' | 'skein512-384' | 'skein512-392' | 'skein512-400' | 'skein512-408' | 'skein512-416' | 'skein512-424' | 'skein512-432' | 'skein512-440' | 'skein512-448' | 'skein512-456' | 'skein512-464' | 'skein512-472' | 'skein512-480' | 'skein512-488' | 'skein512-496' | 'skein512-504' | 'skein512-512' | 'skein1024-8' | 'skein1024-16' | 'skein1024-24' | 'skein1024-32' | 'skein1024-40' | 'skein1024-48' | 'skein1024-56' | 'skein1024-64' | 'skein1024-72' | 'skein1024-80' | 'skein1024-88' | 'skein1024-96' | 'skein1024-104' | 'skein1024-112' | 'skein1024-120' | 'skein1024-128' | 'skein1024-136' | 'skein1024-144' | 'skein1024-152' | 'skein1024-160' | 'skein1024-168' | 'skein1024-176' | 'skein1024-184' | 'skein1024-192' | 'skein1024-200' | 'skein1024-208' | 'skein1024-216' | 'skein1024-224' | 'skein1024-232' | 'skein1024-240' | 'skein1024-248' | 'skein1024-256' | 'skein1024-264' | 'skein1024-272' | 'skein1024-280' | 'skein1024-288' | 'skein1024-296' | 'skein1024-304' | 'skein1024-312' | 'skein1024-320' | 'skein1024-328' | 'skein1024-336' | 'skein1024-344' | 'skein1024-352' | 'skein1024-360' | 'skein1024-368' | 'skein1024-376' | 'skein1024-384' | 'skein1024-392' | 'skein1024-400' | 'skein1024-408' | 'skein1024-416' | 'skein1024-424' | 'skein1024-432' | 'skein1024-440' | 'skein1024-448' | 'skein1024-456' | 'skein1024-464' | 'skein1024-472' | 'skein1024-480' | 'skein1024-488' | 'skein1024-496' | 'skein1024-504' | 'skein1024-512' | 'skein1024-520' | 'skein1024-528' | 'skein1024-536' | 'skein1024-544' | 'skein1024-552' | 'skein1024-560' | 'skein1024-568' | 'skein1024-576' | 'skein1024-584' | 'skein1024-592' | 'skein1024-600' | 'skein1024-608' | 'skein1024-616' | 'skein1024-624' | 'skein1024-632' | 'skein1024-640' | 'skein1024-648' | 'skein1024-656' | 'skein1024-664' | 'skein1024-672' | 'skein1024-680' | 'skein1024-688' | 'skein1024-696' | 'skein1024-704' | 'skein1024-712' | 'skein1024-720' | 'skein1024-728' | 'skein1024-736' | 'skein1024-744' | 'skein1024-752' | 'skein1024-760' | 'skein1024-768' | 'skein1024-776' | 'skein1024-784' | 'skein1024-792' | 'skein1024-800' | 'skein1024-808' | 'skein1024-816' | 'skein1024-824' | 'skein1024-832' | 'skein1024-840' | 'skein1024-848' | 'skein1024-856' | 'skein1024-864' | 'skein1024-872' | 'skein1024-880' | 'skein1024-888' | 'skein1024-896' | 'skein1024-904' | 'skein1024-912' | 'skein1024-920' | 'skein1024-928' | 'skein1024-936' | 'skein1024-944' | 'skein1024-952' | 'skein1024-960' | 'skein1024-968' | 'skein1024-976' | 'skein1024-984' | 'skein1024-992' | 'skein1024-1000' | 'skein1024-1008' | 'skein1024-1016' | 'skein1024-1024' | 'poseidon-bls12_381-a2-fc1' | 'poseidon-bls12_381-a2-fc1-sc' | 'zeroxcert-imprint-256' | 'fil-commitment-unsealed' | 'fil-commitment-sealed' | 'holochain-adr-v0' | 'holochain-adr-v1' | 'holochain-key-v0' | 'holochain-key-v1' | 'holochain-sig-v0' | 'holochain-sig-v1' | 'skynet-ns';
/**
 * Number for all available codecs
 */
export declare type CodecNumber = 0x00 | 0x01 | 0x02 | 0x03 | 0x04 | 0x06 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 | 0x1a | 0x1b | 0x1c | 0x1d | 0x1e | 0x21 | 0x22 | 0x23 | 0x29 | 0x2a | 0x2f | 0x30 | 0x31 | 0x32 | 0x33 | 0x35 | 0x36 | 0x37 | 0x38 | 0x50 | 0x51 | 0x55 | 0x56 | 0x60 | 0x63 | 0x70 | 0x71 | 0x72 | 0x78 | 0x7b | 0x7c | 0x81 | 0x82 | 0x83 | 0x84 | 0x85 | 0x86 | 0x90 | 0x91 | 0x92 | 0x93 | 0x94 | 0x95 | 0x96 | 0x97 | 0x98 | 0xb0 | 0xb1 | 0xb2 | 0xc0 | 0xc1 | 0xce | 0xd0 | 0xd1 | 0xd4 | 0xd5 | 0xd6 | 0xe0 | 0xe1 | 0xe2 | 0xe3 | 0xe4 | 0xe5 | 0xe6 | 0xe7 | 0xea | 0xeb | 0xec | 0xed | 0xee | 0xf0 | 0xf1 | 0xfa | 0xfb | 0x0111 | 0x0113 | 0x0114 | 0x0115 | 0x0122 | 0x0129 | 0x012d | 0x012e | 0x0190 | 0x01a5 | 0x01a5 | 0x01bb | 0x01bc | 0x01bd | 0x01be | 0x01bf | 0x01c0 | 0x01cc | 0x01dd | 0x01de | 0x01df | 0x01e0 | 0x0200 | 0x0201 | 0x0301 | 0x1012 | 0x1052 | 0x1053 | 0x1054 | 0x1055 | 0x1100 | 0x1200 | 0x1201 | 0x1202 | 0x1203 | 0x1204 | 0x1300 | 0x1d01 | 0x534d | 0xb201 | 0xb202 | 0xb203 | 0xb204 | 0xb205 | 0xb206 | 0xb207 | 0xb208 | 0xb209 | 0xb20a | 0xb20b | 0xb20c | 0xb20d | 0xb20e | 0xb20f | 0xb210 | 0xb211 | 0xb212 | 0xb213 | 0xb214 | 0xb215 | 0xb216 | 0xb217 | 0xb218 | 0xb219 | 0xb21a | 0xb21b | 0xb21c | 0xb21d | 0xb21e | 0xb21f | 0xb220 | 0xb221 | 0xb222 | 0xb223 | 0xb224 | 0xb225 | 0xb226 | 0xb227 | 0xb228 | 0xb229 | 0xb22a | 0xb22b | 0xb22c | 0xb22d | 0xb22e | 0xb22f | 0xb230 | 0xb231 | 0xb232 | 0xb233 | 0xb234 | 0xb235 | 0xb236 | 0xb237 | 0xb238 | 0xb239 | 0xb23a | 0xb23b | 0xb23c | 0xb23d | 0xb23e | 0xb23f | 0xb240 | 0xb241 | 0xb242 | 0xb243 | 0xb244 | 0xb245 | 0xb246 | 0xb247 | 0xb248 | 0xb249 | 0xb24a | 0xb24b | 0xb24c | 0xb24d | 0xb24e | 0xb24f | 0xb250 | 0xb251 | 0xb252 | 0xb253 | 0xb254 | 0xb255 | 0xb256 | 0xb257 | 0xb258 | 0xb259 | 0xb25a | 0xb25b | 0xb25c | 0xb25d | 0xb25e | 0xb25f | 0xb260 | 0xb301 | 0xb302 | 0xb303 | 0xb304 | 0xb305 | 0xb306 | 0xb307 | 0xb308 | 0xb309 | 0xb30a | 0xb30b | 0xb30c | 0xb30d | 0xb30e | 0xb30f | 0xb310 | 0xb311 | 0xb312 | 0xb313 | 0xb314 | 0xb315 | 0xb316 | 0xb317 | 0xb318 | 0xb319 | 0xb31a | 0xb31b | 0xb31c | 0xb31d | 0xb31e | 0xb31f | 0xb320 | 0xb321 | 0xb322 | 0xb323 | 0xb324 | 0xb325 | 0xb326 | 0xb327 | 0xb328 | 0xb329 | 0xb32a | 0xb32b | 0xb32c | 0xb32d | 0xb32e | 0xb32f | 0xb330 | 0xb331 | 0xb332 | 0xb333 | 0xb334 | 0xb335 | 0xb336 | 0xb337 | 0xb338 | 0xb339 | 0xb33a | 0xb33b | 0xb33c | 0xb33d | 0xb33e | 0xb33f | 0xb340 | 0xb341 | 0xb342 | 0xb343 | 0xb344 | 0xb345 | 0xb346 | 0xb347 | 0xb348 | 0xb349 | 0xb34a | 0xb34b | 0xb34c | 0xb34d | 0xb34e | 0xb34f | 0xb350 | 0xb351 | 0xb352 | 0xb353 | 0xb354 | 0xb355 | 0xb356 | 0xb357 | 0xb358 | 0xb359 | 0xb35a | 0xb35b | 0xb35c | 0xb35d | 0xb35e | 0xb35f | 0xb360 | 0xb361 | 0xb362 | 0xb363 | 0xb364 | 0xb365 | 0xb366 | 0xb367 | 0xb368 | 0xb369 | 0xb36a | 0xb36b | 0xb36c | 0xb36d | 0xb36e | 0xb36f | 0xb370 | 0xb371 | 0xb372 | 0xb373 | 0xb374 | 0xb375 | 0xb376 | 0xb377 | 0xb378 | 0xb379 | 0xb37a | 0xb37b | 0xb37c | 0xb37d | 0xb37e | 0xb37f | 0xb380 | 0xb381 | 0xb382 | 0xb383 | 0xb384 | 0xb385 | 0xb386 | 0xb387 | 0xb388 | 0xb389 | 0xb38a | 0xb38b | 0xb38c | 0xb38d | 0xb38e | 0xb38f | 0xb390 | 0xb391 | 0xb392 | 0xb393 | 0xb394 | 0xb395 | 0xb396 | 0xb397 | 0xb398 | 0xb399 | 0xb39a | 0xb39b | 0xb39c | 0xb39d | 0xb39e | 0xb39f | 0xb3a0 | 0xb3a1 | 0xb3a2 | 0xb3a3 | 0xb3a4 | 0xb3a5 | 0xb3a6 | 0xb3a7 | 0xb3a8 | 0xb3a9 | 0xb3aa | 0xb3ab | 0xb3ac | 0xb3ad | 0xb3ae | 0xb3af | 0xb3b0 | 0xb3b1 | 0xb3b2 | 0xb3b3 | 0xb3b4 | 0xb3b5 | 0xb3b6 | 0xb3b7 | 0xb3b8 | 0xb3b9 | 0xb3ba | 0xb3bb | 0xb3bc | 0xb3bd | 0xb3be | 0xb3bf | 0xb3c0 | 0xb3c1 | 0xb3c2 | 0xb3c3 | 0xb3c4 | 0xb3c5 | 0xb3c6 | 0xb3c7 | 0xb3c8 | 0xb3c9 | 0xb3ca | 0xb3cb | 0xb3cc | 0xb3cd | 0xb3ce | 0xb3cf | 0xb3d0 | 0xb3d1 | 0xb3d2 | 0xb3d3 | 0xb3d4 | 0xb3d5 | 0xb3d6 | 0xb3d7 | 0xb3d8 | 0xb3d9 | 0xb3da | 0xb3db | 0xb3dc | 0xb3dd | 0xb3de | 0xb3df | 0xb3e0 | 0xb401 | 0xb402 | 0xce11 | 0xf101 | 0xf102 | 0x807124 | 0x817124 | 0x947124 | 0x957124 | 0xa27124 | 0xa37124 | 0xb19910;
export declare type ConstantNumberMap = Record<CodecConstant, CodecNumber>;
export declare type NameUint8ArrayMap = Record<CodecName, Uint8Array>;
export declare type NumberNameMap = Record<CodecNumber, CodecName>;
export declare type NameNumberMap = Record<CodecName, CodecNumber>;
//# sourceMappingURL=generated-types.d.ts.map