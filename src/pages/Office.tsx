import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import useOffice from 'store/office/hooks';

import {
  GlobeAltIcon,
  BoltIcon,
  CreditCardIcon,
  PowerIcon,
  DocumentTextIcon,
  UsersIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/solid';

import { Card } from 'components/widget';
import { printSign } from 'utils';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Office = () => {
  const { data, isLoading, isError } = useOffice();
  const [state, setState] = useState({
    breakpoints: 'lg',
    layouts: {
      lg: [
        { i: 'simple_national_power', x: 0, y: 0, w: 2, h: 1, minW: 0 },
        { i: 'simple_rank', x: 2, y: 0, w: 2, h: 1, minW: 0 },
        { i: 'simple_planet', x: 4, y: 0, w: 2, h: 1, minW: 0 },
        { i: 'simple_turn', x: 6, y: 0, w: 2, h: 1, minW: 0 },
        { i: 'simple_money', x: 8, y: 0, w: 2, h: 1, minW: 0 },
        { i: 'simple_energy', x: 10, y: 0, w: 2, h: 1, minW: 0 },
        { i: 'status', x: 0, y: 1, w: 3, h: 4, minW: 2 },
        { i: '2', x: 3, y: 1, w: 3, h: 2, minW: 2 },
        { i: '3', x: 6, y: 1, w: 3, h: 2, minW: 2 },
        { i: '4', x: 9, y: 1, w: 3, h: 2, minW: 2 },
        { i: '5', x: 0, y: 2, w: 3, h: 2, minW: 2 },
        { i: '6', x: 3, y: 2, w: 3, h: 2, minW: 2 },
      ],
      md: [
        { i: 'resource', x: 0, y: 0, w: 9, h: 2, minW: 0 },
        { i: '1', x: 0, y: 0, w: 3, h: 2, minW: 2 },
        { i: '2', x: 3, y: 0, w: 3, h: 2, minW: 2 },
        { i: '3', x: 6, y: 0, w: 3, h: 2, minW: 2 },
        { i: '4', x: 0, y: 1, w: 3, h: 2, minW: 2 },
        { i: '5', x: 3, y: 1, w: 3, h: 2, minW: 2 },
        { i: '6', x: 6, y: 1, w: 3, h: 2, minW: 2 },
      ],
      sm: [
        { i: 'resource', x: 0, y: 0, w: 6, h: 2, minW: 0 },
        { i: '1', x: 0, y: 0, w: 3, h: 2, minW: 2 },
        { i: '2', x: 3, y: 0, w: 3, h: 2, minW: 2 },
        { i: '3', x: 0, y: 1, w: 3, h: 2, minW: 2 },
        { i: '4', x: 3, y: 1, w: 3, h: 2, minW: 2 },
        { i: '5', x: 0, y: 2, w: 3, h: 2, minW: 2 },
        { i: '6', x: 3, y: 2, w: 3, h: 2, minW: 2 },
      ],
      xs: [
        { i: 'resource', x: 0, y: 0, w: 3, h: 2, minW: 0 },
        { i: '1', x: 0, y: 0, w: 3, h: 2, minW: 2 },
        { i: '2', x: 0, y: 1, w: 3, h: 2, minW: 2 },
        { i: '3', x: 0, y: 2, w: 3, h: 2, minW: 2 },
        { i: '4', x: 0, y: 3, w: 3, h: 2, minW: 2 },
        { i: '5', x: 0, y: 5, w: 3, h: 2, minW: 2 },
        { i: '6', x: 0, y: 6, w: 3, h: 2, minW: 2 },
      ],
    },
  });

  return (
    <article>
      <ResponsiveGridLayout
        className="layout"
        layouts={state.layouts}
        margin={[20, 15]}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 9, sm: 6, xs: 3, xxs: 2 }}
        rowHeight={50}
        isResizable
      >
        <Card
          key="simple_national_power"
          className="flex gap-y-2 justify-around border rounded dark:bg-slate-900 dark:border-slate-600 px-3 items-center"
        >
          <Card.Title className="text-base">
            <PowerIcon className="icon w-10 h-10" />
          </Card.Title>
          <Card.Body className="flex gap-x-2">
            <p className="text-xl">
              <span className="mr-2">
                {data?.national_power && new Intl.NumberFormat('ko-KR').format(data.national_power)}
              </span>
            </p>
          </Card.Body>
        </Card>
        <Card
          key="simple_rank"
          className="flex gap-y-2 justify-around border rounded dark:bg-slate-900 dark:border-slate-600 px-3 items-center"
        >
          <Card.Title className="text-base"> 순위 </Card.Title>
          <Card.Body className="flex gap-x-2">
            <p className="text-xl">
              <span className="mr-2">{data?.rank}</span>
              <span>(</span>
              <span className="text-red-500">{printSign(data?.income.rank)}</span>
              <span>)</span>
            </p>
          </Card.Body>
        </Card>
        <Card
          key="simple_planet"
          className="flex gap-y-2 justify-around border rounded dark:bg-slate-900 dark:border-slate-600 px-3 items-center"
        >
          <Card.Title className="text-base flex items-center">
            <GlobeAltIcon className="icon w-10 h-10" />
          </Card.Title>
          <Card.Body className="flex gap-x-2">
            <p className="text-xl space-x-1">
              <span className="">
                {data?.planet.total && new Intl.NumberFormat('ko-KR').format(data?.planet.total)}
              </span>
            </p>
          </Card.Body>
        </Card>
        <Card
          key="simple_turn"
          className="flex gap-y-2 justify-around border rounded dark:bg-slate-900 dark:border-slate-600 px-3 items-center"
        >
          <Card.Title className="text-base"> 턴 </Card.Title>
          <Card.Body className="flex gap-x-2">
            <p className="text-xl space-x-1">
              <span className="">{data?.turn.now}</span>
              <span>/</span>
              <span className="text-red-500">
                {data?.turn.total && new Intl.NumberFormat('ko-KR').format(data?.turn.total)}
              </span>
            </p>
          </Card.Body>
        </Card>
        <Card
          key="simple_money"
          className="flex gap-y-2 justify-around border rounded dark:bg-slate-900 dark:border-slate-600 px-3 items-center"
        >
          <Card.Title className="text-base">
            <CreditCardIcon className="icon w-10 h-10" />
          </Card.Title>
          <Card.Body className="flex text-xs">
            {data?.money && <span>{new Intl.NumberFormat('ko-KR').format(data.money)}</span>} <span>(</span>
            <span className="text-red-500">{printSign(data?.income.money)}</span>
            <span>)</span>
          </Card.Body>
        </Card>
        <Card
          key="simple_energy"
          className="flex gap-y-2 justify-around border rounded dark:bg-slate-900 dark:border-slate-600 px-3 items-center"
        >
          <Card.Title className="text-base">
            <BoltIcon className="icon w-10 h-10" />
          </Card.Title>
          <Card.Body className="flex text-xs">
            {data?.energy && <span>{new Intl.NumberFormat('ko-KR').format(data.energy)}</span>}
            <span>(</span>
            <span className="text-red-500">{printSign(data?.income.energy)}</span>
            <span>)</span>
          </Card.Body>
        </Card>
        {/* <div className="flex flex-col gap-y-2 justify-around w-32 h-32 border rounded dark:bg-slate-900 dark:border-slate-600 px-3">
              <span> 행성 </span>
              <div className="flex gap-x-2">
                <StarIcon className="icon w-5 h-5 p-0" />
                <h2 className="text-base">
                  {data?.rank}(<span className="text-red-500">{printSign(data?.income.rank)}</span>)
                </h2>
              </div>
              <div className="flex gap-x-2">
                <GasPlanetIcon className="icon w-5 h-5 p-0" />
                <h2 className="text-base">
                  {data?.rank}(<span className="text-red-500">{printSign(data?.income.rank)}</span>)
                </h2>
              </div>
              <div className="flex gap-x-2">
                <GlobeAltIcon className="icon w-5 h-5 p-0" />
                <h2 className="text-base">
                  {data?.rank}(<span className="text-red-500">{printSign(data?.income.rank)}</span>)
                </h2>
              </div>
            </div> */}

        <Card key="status">
          <Card.Title className="flex gap-x-2 items-center text-xl justify-between">
            <div className="flex gap-x-2 items-center">
              <DocumentTextIcon className="icon w-10 h-10" />
              <span className="inline-flex items-center h-full">상태</span>
            </div>
            <EllipsisVerticalIcon
              className="icon w-8 h-8 cursor-pointer dark:hover:bg-slate-900"
              onMouseDown={e => {
                e.preventDefault();
                e.stopPropagation();
              }}
            />
          </Card.Title>
          <Card.Body>
            <p className="flex items-center">
              <UsersIcon className="icon w-8 h-8" />
              {data?.person && <span>{new Intl.NumberFormat('ko-KR').format(data.person)}</span>}
              <span>(</span>
              <span className="text-red-500">{printSign(data?.income.person)}</span>
              <span>)</span>
            </p>
            <p className="flex items-center">
              <CreditCardIcon className="icon w-8 h-8" />
              {data?.money && <span>{new Intl.NumberFormat('ko-KR').format(data.money)}</span>}
              <span>(</span>
              <span className="text-red-500">{printSign(data?.income.money)}</span>
              <span>)</span>
            </p>
            <p className="flex items-center">
              <CreditCardIcon className="icon w-8 h-8" />
              {data?.money && <span>{new Intl.NumberFormat('ko-KR').format(data.money)}</span>}
              <span>(</span>
              <span className="text-red-500">{printSign(data?.income.money)}</span>
              <span>)</span>
            </p>
            <p className="flex items-center">
              <BoltIcon className="icon w-8 h-8" />
              {data?.energy && <span>{new Intl.NumberFormat('ko-KR').format(data.energy)}</span>}
              <span>(</span>
              <span className="text-red-500">{printSign(data?.income.energy)}</span>
              <span>)</span>
            </p>
          </Card.Body>
        </Card>
        <Card key="2">
          <Card.Title> 2 </Card.Title>
          ㅁㄴㅇㄹ
        </Card>
        <Card key="3">
          <Card.Title> 3 </Card.Title>
        </Card>
        <Card key="4">
          <Card.Title> 4 </Card.Title>
        </Card>
        <Card key="5">
          <Card.Title> 5 </Card.Title>
        </Card>
        <Card key="6">
          <Card.Title> 6 </Card.Title>
        </Card>
      </ResponsiveGridLayout>
    </article>
  );
};

export default Office;
