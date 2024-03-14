import { Button } from './button';

export function MovieForm() {
  return (
    <section className='bg-zinc-600 text-zinc-100 space-y-8 p-4 max-w-md mx-auto rounded-md shadow-md'>
      <h2 className='text-center font-bold text-2xl'>Add New Movie</h2>
      <form className='space-y-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Enter Name:</label>
          <input type='text' id='name' required />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Choose Movie Type:</label>
          <div>
            <div className='flex gap-2 items-center'>
              <input
                type='radio'
                id='trending'
                name='type'
                value='trending'
                required
              />
              <label htmlFor='trending'>Trending</label>
            </div>
            <div className='flex gap-2 items-center'>
              <input
                type='radio'
                id='popular'
                name='type'
                value='popular'
                required
              />
              <label htmlFor='popular'>Popular</label>
            </div>
            <div className='flex gap-2 items-center'>
              <input
                type='radio'
                id='highRanking'
                name='type'
                value='highRanking'
                required
              />
              <label htmlFor='highRanking'>High Ranking</label>
            </div>
          </div>
        </div>
        <Button>Add</Button>
      </form>
    </section>
  );
}
