'use client';
import { useAccount } from 'wagmi';
import Footer from 'src/components/Footer';
import IdentityWrapper from 'src/components/IdentityWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import WalletWrapper from 'src/components/WalletWrapper';
import { motion } from 'framer-motion';
import OnchainStore from 'src/components/OnchainStore';

export default function Page() {
  const { isConnected } = useAccount();

  return (
    <div className='flex h-full w-96 max-w-full flex-col px-1 font-sans md:w-[1008px]'>
      <section className='mt-6 mb-6 flex w-full flex-col md:flex-row'>
        <div className='flex w-full flex-row items-center justify-between gap-2 md:gap-0'>
          <div className='flex flex-col items-center gap-2'>
          <motion.h1>
            <div className='flex items-center gap-2'>
              <a
                href={ONCHAINKIT_LINK}
                target='_blank'
                rel='noreferrer'
                className='text-3xl font-bold text-gray-700 hover:text-gray-800'
              >
               Welcome to Igna's shop
              </a>
            </div>
          </motion.h1>
          {isConnected ? <IdentityWrapper /> : null}
          </div>
          <div className="flex items-center gap-3">
            <WalletWrapper />
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-4 rounded-xl px-2 py-4 md:grow">
        {isConnected ? (
          <>
            <OnchainStore />
          </>
        ) : (
          <div className="flex h-48 w-full max-w-md items-center justify-center rounded-lg bg-gray-100 p-6 text-center text-gray-600">
            Please connect your account to see the shop
          </div>
        )}
      </section>
    </div>
  );
}
