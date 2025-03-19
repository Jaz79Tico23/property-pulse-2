import Link from "next/link"

const InfoBox = ({
  children,
  heading,
  buttonText,
  route,
  background,
  bgButton,
  bgHover,
}) => {
  return (
    <div className={`${background} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={route}
        className={`inline-block ${bgButton} text-white rounded-lg px-4 py-2 hover:${bgHover}`}
      >
        {buttonText}
      </Link>
    </div>
  )
}

export default InfoBox
