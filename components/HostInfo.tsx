import type { Host } from "@/types/room";

interface HostInfoProps {
  host: Host;
}

const HostInfo = ({ host }: HostInfoProps) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={host.avatarUrl}
        alt={host.name}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <p className="font-bold">Anfitrión: {host.name}</p>
        <p className="text-gray-500">
          Superanfitrión · {host.yearsHosting} años anfitrionando
        </p>
      </div>
    </div>
  );
};

export default HostInfo;