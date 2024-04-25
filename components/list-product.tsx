import Image from "next/image";
import Link from "next/link";

interface ListProductProps {
  title: string;
  price: number;
  created_at: Date;
  photo: string;
  id: number;
}

export default function ListProduct({
  title,
  price,
  created_at,
  photo,
  id,
}: ListProductProps) {
  return (
    <Link href={`/products/${id}`} className="">
      <div>
        <Image src={photo} alt={title} width={200} height={200} />
      </div>
    </Link>
  );
}
