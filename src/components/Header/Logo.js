import Link from 'next/link'
import Image from 'next/image'
import profileImg from "@/public/profile-img.png"

const Logo = () => {
	return (
		<Link href="/">
			<div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
				<Image src={profileImg} alt="Codebucks" className="w-full h-auto rounded-full" />
			</div>
			<span className="font-bold text-xl">CodeBucks</span>
		</Link>
	)
}

export default Logo