import Image from 'next/image'

export function MenuTitle() {
  return (
    <div className="flex items-center gap-2 text-xl">
      <Image src={'/images/logo/logo.png'} alt="logo" width={50} height={50} />
      Elf Maranwe
    </div>
  )
}
