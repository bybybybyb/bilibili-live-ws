export const getConf = async (roomid: number) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const got = require('got')
  const { data: { token: key, host_server_list: [{ host }] } } = await got(`https://api.live.bilibili.com/room/v1/Danmu/getConf?room_id=${roomid}`).json()
  const address = `wss://${host}/sub`
  return { key, host, address } as { key: string, host: string, address: string }
}
