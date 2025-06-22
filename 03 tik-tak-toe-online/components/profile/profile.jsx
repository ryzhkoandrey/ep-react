import avatarSrc from './avatar.png';

export function Profile() {
   return (
      <div className="flex items-center gap-2 text-start text-teal-600">
         {/* avatar */}
         <Image src={avatarSrc} width={48} height={48} alt="avatar" unoptimized />

         {/* info */}
         <div>
            <div className="text-lg leading-tight">Paromovevg</div>
            <div className="text-slate-400 text-xs leading-tight">Рейтинг: 1230</div>
         </div>
      </div>
   );
}
