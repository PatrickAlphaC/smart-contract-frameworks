#!/usr/bin/python3
from brownie import PriceConsumerV3


def main():
    price_feed_contract = PriceConsumerV3[len(PriceConsumerV3) - 1]
    print("Reading data from {}".format(price_feed_contract.address))
    print(price_feed_contract.getLatestPrice())
